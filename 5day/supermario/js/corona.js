//cors
//loadCorona("20220731");

const picker = new Lightpick({
  field: document.querySelector("#date"),
  onSelect: function (date) {
    console.log(date.format("YYYYMMDD"));
    loadCorona(date.format("YYYYMMDD"));
  },
});
const ctx = document.querySelector("#coronaChart").getContext("2d");
let myChart = null;
function loadCorona(date) {
  $.ajax({
    url: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson",
    data: {
      ServiceKey:
        "Wnus4QpirWGI56CfvzMWDIDHMRL/mEF/qTl9gwVNbRggLYTGPFIdwBy0L51B+27d5QRbLanNmIAxPwNvl7dKPA==",
      _type: "json",
      startCreateDt: date,
      endCreateDt: date,
    },
  }).done(function (data) {
    //console.log(data.response.body.items.item);

    const itemList = data.response.body.items.item;
    const cities = [];
    const incDecList = [];
    $.each(itemList, function (idx, item) {
      cities.push(item.gubun);
      incDecList.push(item.incDec);
    });
    console.log("🚀 ~ file: corona.js ~ line 13 ~ cities", cities);
    console.log("🚀 ~ file: corona.js ~ line 15 ~ incDecList", incDecList);

    if (myChart !== null) {
      myChart.destroy();
    }
    myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: cities,
        datasets: [
          {
            label: "# of Votes",
            data: incDecList,
            backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
}
