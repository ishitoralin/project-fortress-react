import dayjs from 'dayjs';

const toPlotFormat = (plotData, datasetPointColor) => {
  const datasets = plotData.map((datas, i) => {
    const xy = datas.map((data) => {
      return { x: dayjs(data.date), y: data.volumn };
    });
    datas = {
      label: datas[0].name,
      data: xy,
      backgroundColor: datasetPointColor[i],
      pointRadius: 9,
    };
    return datas;
  });

  return datasets;
};

export { toPlotFormat };
