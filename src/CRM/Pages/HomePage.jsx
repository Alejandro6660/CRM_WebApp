import { NavComponent } from "../Components/NavComponent";
import { CardComponent } from "../../layout/Components/CardComponent";
import { Suspense, useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export const HomePage = () => {
  useEffect(() => {
    const chartOptions = {
      layout: {
        textColor: "white",
        background: { type: "solid", color: "black" },
      },
    };
    const chart = createChart(
      document.getElementById("container"),
      chartOptions
    );
    const areaSeries = chart.addAreaSeries({
      lineColor: "#2962FF",
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });

    const data = [
      { value: 0, time: 1642425322 },
      { value: 8, time: 1642511722 },
      { value: 10, time: 1642598122 },
      { value: 20, time: 1642684522 },
      { value: 3, time: 1642770922 },
      { value: 43, time: 1642857322 },
      { value: 41, time: 1642943722 },
      { value: 43, time: 1643030122 },
      { value: 56, time: 1643116522 },
      { value: 46, time: 1643202922 },
    ];

    areaSeries.setData(data);

    chart.timeScale().fitContent();
  }, []); // Este efecto se ejecutará solo una vez después de que el componente se monte

  return (
    <main className="flex">
      <NavComponent />
      <section className="p-7 text-2xl font-semibold ml-3 grid grid-cols-12 w-full gap-2">
        <CardComponent span="col-span-3">
          <div className="text-center">
            <h4 className="text-xl font-bold">
              Mejor Cliente
              <span className="p-2 text-blueColorLigth">
                <i className="fa-solid fa-wallet"></i>
              </span>
            </h4>
          </div>
          <div className="text-base ">
            <h5>Alejandro Fuentes</h5>
            <p>
              Compras: <span>15</span>
            </p>
          </div>
        </CardComponent>
        <CardComponent span={"col-span-8"}>
          <div className="text-center">
            <h4 className="text-xl font-bold">
              Mejor Cliente
              <span className="p-2 text-blueColorLigth">
                <i className="fa-solid fa-wallet"></i>
              </span>
            </h4>
          </div>
          <div id="container"></div>
        </CardComponent>
      </section>
    </main>
  );
};
