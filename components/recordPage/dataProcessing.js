import dayjs from 'dayjs';

const toPlotFormat = (plotData, datasetPointColor, datasetLineColor) => {
  const datasets = plotData.map((datas, i) => {
    const xy = datas.map((data) => {
      return { x: dayjs(data.date), y: data.volumn };
    });
    datas = {
      label: datas[0].name,
      data: xy,
      backgroundColor: datasetPointColor[i],
      pointRadius: 9,
      showLine: true, // Show the line connecting the dots
      fill: false, // Do not fill the area under the line
      borderColor: datasetLineColor[i],
      borderWidth: 5, // Set the line thickness
      borderDash: [30, 5], // Set the line style (alternating dashes and gaps)
    };
    return datas;
  });

  return datasets;
};

export { toPlotFormat };
