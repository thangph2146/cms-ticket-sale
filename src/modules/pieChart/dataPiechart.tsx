export const labels = ["Vé chưa sử dụng", "Vé đã sử dùng"];

export const options: any = {
    plugins: {
      legend: { display: false },
      datalabels: {
        display: true,
        formatter: (value: any, ctx: any) => {
          let sum = ctx.dataset._meta[0].total;
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          // console.log(value);
          return percentage;
        },
        color: "#fff",
      },
      title: {
        display: true,
        text: "Gói sự kiện",
        color: "#1E0D03",
        font: { weight: "600" },
        padding: {
          top: 0,
          bottom: 25,
        },
      },
    },
    layout: { padding: { bottom: 100 } },
    responsive: true,
    maintainAspectRatio: true,
  };

  export const data: any = {
    type: "pie",
    labels,
    datasets: [
      {
        data: [13568, 56024],
        backgroundColor: ["rgba(255, 138, 72, 1)", "rgba(79, 117, 255, 1)"],
        borderColor: ["rgba(255, 138, 72, 1)", "rgba(79, 117, 255, 1)"],
        borderWidth: 1,
      },
      {
        backgroundColor: "white",
        borderColor: "white",
        color: "black",
      },
    ],
  };

  export const options2: any = {
    plugins: {
      legend: { display: false },
      datalabels: {
        display: true,
        formatter: (value: any, ctx: any) => {
          let sum = ctx.dataset._meta[0].total;
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          console.log(value);
          return percentage;
        },
        color: "#fff",
      },
      title: {
        display: true,
        text: "Gói gia đình",
        color: "#1E0D03",
        font: { weight: "600" },
        padding: {
          top: 0,
          bottom: 25,
        },
      },
    },
    layout: { padding: { bottom: 100 } },
    responsive: true,
  };

  export const data2: any = {
    type: "pie",
    labels: labels,
    datasets: [
      {
        data: [ 28302,30256],
        backgroundColor: ["rgba(255, 138, 72, 1)", "rgba(79, 117, 255, 1)"],
        borderColor: ["rgba(255, 138, 72, 1)", "rgba(79, 117, 255, 1)"],
        borderWidth: 1,
      },
      {
        backgroundColor: "white",
        borderColor: "white",
        color: "black",
      },
    ],
  };