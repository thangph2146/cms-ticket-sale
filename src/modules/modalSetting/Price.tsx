import { Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { PropsModalSettingPrice, ModalSettingPriceChecked, ModalSettingPriceCombo, ModalSettingPriceMessage } from './config.type';

const Price = (props: PropsModalSettingPrice) => {
    //=====================================================
    // props
    //=====================================================
    const { form, messagePrice } = props;
    //=====================================================
    // state
    //=====================================================
    const [checked, setChecked] = useState<ModalSettingPriceChecked>({
        priceDefault: false,
        priceCombo: false,
    });
    const [priceCombo, setPriceCombo] = useState<ModalSettingPriceCombo>({
        price: false,
        per: false,
    });
    const [message, setMessage] = useState<ModalSettingPriceMessage>({
        priceDefault: false,
        priceCombo: false,
        per: false,
    });
    //=====================================================
    // function
    //=====================================================
    const onChangePriceDefault = (e: any) => {
        if (e.target.value) {
            setChecked({
                ...checked,
                priceDefault: true,
            });
        } else {
            setChecked({
                ...checked,
                priceDefault: false,
            });
        }
        if (!isNaN(e.target.value)) {
            form.setFieldsValue({
                ...form.fieldsValue,
                priceDefault: Number(e.target.value),
            });
            setMessage({
                ...message,
                priceDefault: false,
            });
        } else {
            form.setFieldsValue({
                ...form.fieldsValue,
                priceDefault: '',
            });
            setMessage({
                ...message,
                priceDefault: true,
            });
        }
    };
    const onChangePriceCombo = (e: any) => {
        if (e.target.value) {
            setPriceCombo({
                ...priceCombo,
                price: true,
            });
        } else {
            setPriceCombo({
                ...priceCombo,
                price: false,
            });
        }
        if (!isNaN(e.target.value)) {
            form.setFieldsValue({
                ...form.fieldsValue,
                priceCombo: Number(e.target.value),
            });
            setMessage({
                ...message,
                priceCombo: false,
            });
        } else {
            form.setFieldsValue({
                ...form.fieldsValue,
                priceCombo: '',
            });
            setMessage({
                ...message,
                priceCombo: true,
            });
        }
    };
    const onChangePriceComboPer = (e: any) => {
        if (e.target.value) {
            setPriceCombo({
                ...priceCombo,
                per: true,
            });
        } else {
            setPriceCombo({
                ...priceCombo,
                per: false,
            });
        }
        if (!isNaN(e.target.value)) {
            form.setFieldsValue({
                ...form.fieldsValue,
                per: Number(e.target.value),
            });
            setMessage({
                ...message,
                per: false,
            });
        } else {
            form.setFieldsValue({
                ...form.fieldsValue,
                per: '',
            });
            setMessage({
                ...message,
                per: true,
            });
        }
    };
    useEffect(() => {
        if (!priceCombo.per && !priceCombo.price) {
            setChecked({
                ...checked,
                priceCombo: false,
            });
        } else {
            setChecked({
                ...checked,
                priceCombo: true,
            });
        }
    }, [priceCombo.per, priceCombo.price]);
    return (
        <div className="price">
            <span className="text">Giá vé áp dụng</span>
            <div className="price-default">
                <Checkbox checked={checked.priceDefault}>
                    <span className="sub-text">Vé lẻ (vnđ/vé) với giá</span>
                </Checkbox>
                <Form.Item style={{ marginBottom: 0 }} name="priceDefault">
                    <Input
                        placeholder="Giá vé"
                        onChange={onChangePriceDefault}
                    />
                </Form.Item>

                <span className="sub-text">/ vé</span>
            </div>
            <span className={` red ${message.priceDefault ? '' : 'd-none'}`}>
                Bạn cần nhập số cho giá vé
            </span>
            <div className="price-combo">
                <Checkbox checked={checked.priceCombo}>
                    <span className="sub-text">Vé lẻ (vnđ/vé) với giá</span>
                </Checkbox>
                <Form.Item style={{ marginBottom: 0 }} name="priceCombo">
                    <Input placeholder="Giá vé" onChange={onChangePriceCombo} />
                </Form.Item>
                <span className="sub-text">/</span>
                <Form.Item style={{ marginBottom: 0 }} name="per">
                    <Input
                        placeholder="Giá vé"
                        className="price-per"
                        onChange={onChangePriceComboPer}
                    />
                </Form.Item>
                <span className="sub-text">vé</span>
            </div>
            <div>
         
                <span className={` red ${messagePrice ? '' : 'd-none'}`}>
                    Bạn cần nhập giá vé và số vé
                </span>
            </div>
        </div>
    );
};

export default Price;
