import { Form, Modal } from 'antd';
import { useEffect, useRef, useState } from 'react';
import ModalSettingDate from './Date';
import Name from './Name';
import Price from './Price';
import Static from './Static';
import { getDatabase, ref, set } from 'firebase/database';
import moment from 'moment';
import { resetState, setDayEndSetState, setDayStartSetState } from './config';
import { PropsModalSetting, State } from './config.type';
const ModalSetting = (props: PropsModalSetting) => {
    //===============================================
    // props
    //===============================================

    const { isModal, handleModalClose, dataSetting, isUpdate, dataUpdate } = props;
    //===============================================
    // state
    //===============================================
    const [messagePrice, setMessagePrice] = useState<boolean>(false);
    const [messageDate, setMessageDate] = useState<boolean>(false);

    const [form]:any = Form.useForm();
    const formEl =useRef(null)
    const [state, setState] = useState<State>({
        date: {
            dayStart: {
                activeDate: 0,
                activeMonth: 0,
                activeYear: 0,
                byDate: 1,
            },
            dayEnd: {
                activeDate: 0,
                activeMonth: 0,
                activeYear: 0,
                byDate: 1,
            },
        },
        tinhTrang: 'chuaSuDung'||'hetHan',
    });

    //===================================================
    // set lại ngày bắt đầu
    //===================================================
    const setDayStart = (date: number, month: number, year: number) => {
        const d:Date = new Date();
        const dE = state.date.dayStart;
        const boolean:boolean =
            dE.activeDate === 0 && dE.activeMonth === 0 && dE.activeYear === 0;
        if (boolean) {
            setMessageDate(false);
            setDayStartSetState(date, month, year, setState, state);
        } else {
            const newDE:number = d.setFullYear(
                dE.activeYear,
                dE.activeMonth,
                dE.activeDate
            );
            const newDS:number = d.setFullYear(year, month, date);
            if (newDE > newDS) {
                setMessageDate(false);
                setDayStartSetState(date, month, year, setState, state);
            } else {
                setMessageDate(true);
            }
        }
    };
  
    //===================================================
    // set day ket thuc
    //===================================================
    const setDayEnd = (date: any, month: any, year: any) => {
        const d:Date = new Date();
        const dS = state.date.dayStart;
        const boolean:boolean =
            dS.activeDate === 0 && dS.activeMonth === 0 && dS.activeYear === 0;
        if (boolean) {
            setMessageDate(false);
            setDayEndSetState(date, month, year, setState, state);
        } else {
            const newDS:number = d.setFullYear(
                dS.activeYear,
                dS.activeMonth,
                dS.activeDate
            );
            const newDE:number = d.setFullYear(year, month, date);
            if (newDE > newDS) {
                setDayEndSetState(date, month, year, setState, state);
                setMessageDate(false);
            } else {
                setMessageDate(true);
            }
        }
    };

    //=====================================
    // khi nhan nut huy
    //=====================================
    const handleCancer = () => {
        handleModalClose();
    };
    const getRandom = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    const onFinish = (fieldsValue: any) => {
        //==========================================
        // khai bao biến ngay bat đầu
        //==========================================
        let dayStartDate:number = state.date.dayStart.activeDate;
        let dayStartMonth:number = state.date.dayStart.activeMonth;
        let dayStartYear:number = state.date.dayStart.activeYear;
        const booleanDayStart:boolean =
            dayStartDate === 0 && dayStartMonth === 0 && dayStartYear === 0;
        let dateNgayApDung:string = '';
        let inputstartMonth = dayStartMonth + 1 > 12? dayStartMonth  : dayStartMonth + 1
        if (!booleanDayStart) {dateNgayApDung = `${dayStartDate}/${inputstartMonth}/${dayStartYear}`;
        }
        let timeNgayApDung:string = fieldsValue['timeStart']
            ? fieldsValue['timeStart'].format('HH:mm:ss')
            : '';
        //==========================================
        // khai bao biến ngay ket thuc
        //==========================================
        let dayEndDate:number = state.date.dayEnd.activeDate;
        let dayEndMonth:number = state.date.dayEnd.activeMonth;
        let dayEndYear:number = state.date.dayEnd.activeYear;
        const booleanDayEnd:boolean =
            dayEndDate === 0 && dayEndMonth === 0 && dayEndYear === 0;
        let dateNgayHetHan:string = '';
        let inputEndMonth = dayEndMonth + 1 > 12? dayEndMonth  : dayEndMonth + 1
        if (!booleanDayEnd) {
            dateNgayHetHan = `${dayEndDate}/${inputEndMonth}/${dayEndYear}`;
        }
        let timeNgayHetHan:string = fieldsValue['timeEnd']
            ? fieldsValue['timeEnd'].format('HH:mm:ss')
            : '';
        //==========================================
        // khai bao biến giá vé, giá vé combo, per
        //==========================================
        const GV:number|string = fieldsValue['priceDefault']
            ? fieldsValue['priceDefault']
            : '';
        const GCB:number|string = fieldsValue['priceCombo'] ? fieldsValue['priceCombo'] : '';
        const P:number|string = fieldsValue['per'] ? fieldsValue['per'] : '';
        //==========================================
        // dinh dang tiền tệ cho giá vé, giá vé combo
        //==========================================
        const formatGV:string = GV.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const formatGCB:string = GCB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        //==========================================
        // chuyển value của component thành  value object của data
        //==========================================
        const newGiaCombo:string = fieldsValue['priceCombo']
            ? `${formatGCB} VNĐ/${P} Vé`
            : '';
        let newNgayApDung:string =
            dateNgayApDung === '' && !fieldsValue['timeStart']
                ? ''
                : `${dateNgayApDung}-${timeNgayApDung}`;
        let newNgayHetHan:string =
            dateNgayHetHan === '' && !fieldsValue['timeEnd']
                ? ''
                : `${dateNgayHetHan}-${timeNgayHetHan}`;
        //==========================================
        // gán vào object của data
        //==========================================
        if (
            (!fieldsValue['priceCombo'] && !fieldsValue['per']) ||
            (fieldsValue['priceCombo'] && fieldsValue['per'])
        ) {
            const code:number = getRandom(10000000, 99999999);
            const dataModal = {
                key: code,
                stt: isUpdate ? dataUpdate.stt : dataSetting.length + 1,
                maGoi: `ALT${code}`,
                tenGoiVe: fieldsValue['name'],
                ngayApDung: newNgayApDung,
                ngayHetHan: newNgayHetHan,
                giaVe: fieldsValue['priceDefault'] ? `${formatGV} VNĐ` : '',
                giaCombo: newGiaCombo,
                tinhTrang: state.tinhTrang,
                update: code,
            };
            // reset fields của form đóng modal
            form.resetFields();
            setMessagePrice(false);
            handleModalClose();
            // đẩy object lên data firebase
            const db = getDatabase();
            if (!isUpdate) {
                // thêm data
                dataSetting.push(dataModal);
                set(ref(db, 'data/setting'), dataSetting)
            } else {
                // update date
                const index = dataSetting.findIndex(
                    (item: any) => item.key === dataUpdate.key
                );
                set(ref(db, `data/setting/${index}`), dataModal)
            }
        } else {
            setMessagePrice(true);
        }
    };
    //===================================================
    // useEffect
    //===================================================
    const isUseEffect = [isUpdate, dataUpdate?.key, dataUpdate?.tinhTrang];
    useEffect(() => {
        if (isUpdate) {
            const {
                tenGoiVe,
                ngayApDung,
                ngayHetHan,
                giaVe,
                giaCombo,
                tinhTrang,
            } = dataUpdate;

            let arrayNgayApDung:string[] = ngayApDung.split('-');
            let ngayApDungDate:string = arrayNgayApDung[0];
            let arrayNgayApDungDate:string[] = ngayApDungDate.split('/');

            let ngayApDungTime:string = arrayNgayApDung[1];
            //==============================================
            let arrayNgayHetHan:string[] = ngayHetHan.split('-');
            let ngayHetHanDate:string = arrayNgayHetHan[0];
            let arrayNgayHetHanDate:string[] = ngayHetHanDate.split('/');

            let ngayHetHanTime:string = arrayNgayHetHan[1];
            //===============================================
            let GV:string = giaVe.replace('VNĐ', '').replace('.', '');
            let newGV:number = Number(GV);
            //====================================
            let GCB = giaCombo
                .replace('VNĐ', '')
                .replace('Vé', '')
                .replace('.', '');
            let arrayGCB:string[] = GCB.split('/');
            let newPriceCombo:number = Number(arrayGCB[0]);
            let newPer:number = Number(arrayGCB[1]);
            //===============================================
            setState({
                ...state,
                date: {
                    ...state.date,
                    dayStart: {
                        ...state.date.dayStart,
                        activeDate: ngayApDung
                            ? Number(arrayNgayApDungDate[0])
                            : 0,
                        activeMonth: ngayApDung
                            ? Number(arrayNgayApDungDate[1])
                            : 0,
                        activeYear: ngayApDung
                            ? Number(arrayNgayApDungDate[2])
                            : 0,
                    },
                    dayEnd: {
                        ...state.date.dayEnd,
                        activeDate: ngayHetHan
                            ? Number(arrayNgayHetHanDate[0])
                            : 0,
                        activeMonth: ngayHetHan
                            ? Number(arrayNgayHetHanDate[1])
                            : 0,
                        activeYear: ngayHetHan
                            ? Number(arrayNgayHetHanDate[2])
                            : 0,
                    },
                },
                tinhTrang: tinhTrang,
            });
            let object: any = {
                name: tenGoiVe,
            };
            if (ngayApDungTime && ngayApDung) {
                object.timeStart = moment(ngayApDungTime, 'HH:mm:ss');
            }
            if (ngayHetHanTime && ngayHetHan) {
                object.timeEnd = moment(ngayHetHanTime, 'HH:mm:ss');
            }
            if (giaVe) {
                object.priceDefault = newGV;
            }
            if (giaCombo) {
                object.priceCombo = newPriceCombo;
                object.per = newPer;
            }
            form.setFieldsValue(object);
        } else {
            resetState(setState)
        }
    }, isUseEffect);
    return (
        <Modal visible={isModal} width={758}>
            <Form
                onFinish={onFinish}
                autoComplete="off"
                form={form}
                ref={formEl}
                initialValues={{ remember: true }}
                className="box-modal setting">
                <div className="box-modal-title">
                    <span>
                        {isUpdate ? 'Cập nhật thông tin gói vé' : 'Thêm gói vé'}
                    </span>
                </div>

                <div className="box-modal-body">
                    <Name />
                    <ModalSettingDate
                        state={state}
                        setDayStart={setDayStart}
                        setDayEnd={setDayEnd}
                      
                        messageDate={messageDate}
                    />
                    <Price
                        form={form}
                        messagePrice={messagePrice}
                    />
                    <Static setState={setState} state={state} />
                </div>
                <div className="box-modal-footer">
                    <button className="btn-modal" onClick={handleCancer}>
                        Hủy
                    </button>
                    <button className="btn-save" type="submit">
                        Lưu
                    </button>
                </div>
            </Form>
        </Modal>
    );
};

export default ModalSetting;
