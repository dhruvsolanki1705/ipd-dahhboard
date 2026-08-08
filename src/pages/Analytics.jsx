import {
  BarChart3,
  TrendingUp,
  ShieldAlert,
  Users,
  Camera,
  Activity,
  Download,
  ChevronDown,
} from "lucide-react";

function Analytics() {
  const detectionData = [42, 58, 47, 72, 64, 82, 68, 91, 76, 88, 95, 84];

  const cameras = [
    {
      name: "Camera 01",
      location: "Main Entrance",
      fps: 30,
      people: 112,
      status: "Online",
    },
    {
      name: "Camera 02",
      location: "Parking Area",
      fps: 28,
      people: 74,
      status: "Online",
    },
    {
      name: "Camera 03",
      location: "Back Entrance",
      fps: 0,
      people: 0,
      status: "Offline",
    },
  ];

  return (
    <div className="p-8 text-white">

      {/* HEADER */}

      <div className="flex justify-between items-start mb-8">

        <div>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 bg-blue-500/15 rounded-xl flex items-center justify-center">

              <BarChart3
                size={27}
                className="text-blue-400"
              />

            </div>

            <div>

              <h1 className="text-3xl font-bold">
                Analytics
              </h1>

              <p className="text-slate-400 mt-1">
                Security performance and detection insights
              </p>

            </div>

          </div>

        </div>


        {/* CONTROLS */}

        <div className="flex items-center gap-3">

          <button className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-lg text-sm hover:bg-slate-700 transition">

            Last 24 Hours

            <ChevronDown size={16} />

          </button>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-lg text-sm transition">

            <Download size={16} />

            Export

          </button>

        </div>

      </div>


      {/* TOP KPI STRIP */}

      <div className="grid grid-cols-4 gap-4 mb-7">

        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-sm text-slate-400">
                People Detected
              </p>

              <h2 className="text-3xl font-bold mt-2">
                186
              </h2>

              <p className="text-green-400 text-xs mt-2">
                +12.4% from yesterday
              </p>

            </div>

            <Users
              size={23}
              className="text-blue-400"
            />

          </div>

        </div>


        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-sm text-slate-400">
                Threat Events
              </p>

              <h2 className="text-3xl font-bold mt-2 text-red-400">
                12
              </h2>

              <p className="text-red-400 text-xs mt-2">
                2 currently active
              </p>

            </div>

            <ShieldAlert
              size={23}
              className="text-red-400"
            />

          </div>

        </div>


        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-sm text-slate-400">
                Detection Accuracy
              </p>

              <h2 className="text-3xl font-bold mt-2">
                94.2%
              </h2>

              <p className="text-green-400 text-xs mt-2">
                +2.1% improvement
              </p>

            </div>

            <TrendingUp
              size={23}
              className="text-green-400"
            />

          </div>

        </div>


        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-sm text-slate-400">
                System FPS
              </p>

              <h2 className="text-3xl font-bold mt-2">
                30
              </h2>

              <p className="text-cyan-400 text-xs mt-2">
                Stable processing
              </p>

            </div>

            <Activity
              size={23}
              className="text-cyan-400"
            />

          </div>

        </div>

      </div>


      {/* MAIN ANALYTICS AREA */}

      <div className="grid grid-cols-12 gap-6 mb-7">


        {/* DETECTION ACTIVITY */}

        <div className="col-span-8 bg-slate-800 border border-slate-700 p-6">

          <div className="flex justify-between items-center mb-6">

            <div>

              <h2 className="text-lg font-semibold">
                Detection Activity
              </h2>

              <p className="text-sm text-slate-400 mt-1">
                People detected throughout the selected period
              </p>

            </div>

            <span className="text-xs text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg">
              Live Data
            </span>

          </div>


          {/* CHART */}

          <div className="h-64 flex items-end gap-3 px-2">

            {detectionData.map((value, index) => (

              <div
                key={index}
                className="flex-1 h-full flex flex-col justify-end"
              >

                <div
                  className="bg-blue-500/70 hover:bg-blue-400 transition rounded-t-md w-full"
                  style={{
                    height: `${value}%`,
                  }}
                />

                <span className="text-[10px] text-slate-500 text-center mt-2">
                  {index + 1}
                </span>

              </div>

            ))}

          </div>

          <div className="border-t border-slate-700 mt-2" />

          <div className="flex justify-between text-xs text-slate-500 mt-3">

            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>

          </div>

        </div>


        {/* THREAT DISTRIBUTION */}

        <div className="col-span-4 bg-slate-800 border border-slate-700 p-6">

          <div className="mb-6">

            <h2 className="text-lg font-semibold">
              Threat Distribution
            </h2>

            <p className="text-sm text-slate-400 mt-1">
              Events categorized by severity
            </p>

          </div>


          {/* DONUT STYLE VISUAL */}

          <div className="flex justify-center mb-7">

            <div className="w-40 h-40 rounded-full border-[18px] border-red-500/80 flex items-center justify-center relative">

              <div className="absolute inset-0 rounded-full border-[18px] border-transparent border-t-orange-400 border-r-yellow-400 rotate-45" />

              <div className="text-center">

                <p className="text-3xl font-bold">
                  12
                </p>

                <p className="text-xs text-slate-400">
                  Events
                </p>

              </div>

            </div>

          </div>


          {/* LEGEND */}

          <div className="space-y-4">

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">

                <span className="w-3 h-3 rounded-full bg-red-500" />

                <span className="text-sm text-slate-300">
                  High
                </span>

              </div>

              <span className="text-sm font-semibold">
                4
              </span>

            </div>


            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">

                <span className="w-3 h-3 rounded-full bg-orange-400" />

                <span className="text-sm text-slate-300">
                  Medium
                </span>

              </div>

              <span className="text-sm font-semibold">
                5
              </span>

            </div>


            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">

                <span className="w-3 h-3 rounded-full bg-yellow-400" />

                <span className="text-sm text-slate-300">
                  Low
                </span>

              </div>

              <span className="text-sm font-semibold">
                3
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM SECTION */}

      <div className="grid grid-cols-12 gap-6">


        {/* DETECTION SUMMARY */}

        <div className="col-span-4 bg-slate-800 border border-slate-700 p-6">

          <h2 className="text-lg font-semibold">
            Detection Summary
          </h2>

          <p className="text-sm text-slate-400 mt-1 mb-6">
            System activity overview
          </p>


          <div className="space-y-5">

            <div>

              <div className="flex justify-between mb-2">

                <span className="text-sm text-slate-400">
                  Person Detection
                </span>

                <span className="text-sm font-semibold">
                  186
                </span>

              </div>

              <div className="h-2 bg-slate-700 rounded-full">

                <div className="h-2 bg-blue-500 rounded-full w-[82%]" />

              </div>

            </div>


            <div>

              <div className="flex justify-between mb-2">

                <span className="text-sm text-slate-400">
                  Threat Detection
                </span>

                <span className="text-sm font-semibold">
                  12
                </span>

              </div>

              <div className="h-2 bg-slate-700 rounded-full">

                <div className="h-2 bg-red-500 rounded-full w-[38%]" />

              </div>

            </div>


            <div>

              <div className="flex justify-between mb-2">

                <span className="text-sm text-slate-400">
                  System Stability
                </span>

                <span className="text-sm font-semibold">
                  98%
                </span>

              </div>

              <div className="h-2 bg-slate-700 rounded-full">

                <div className="h-2 bg-green-500 rounded-full w-[98%]" />

              </div>

            </div>

          </div>

        </div>


        {/* CAMERA PERFORMANCE */}

        <div className="col-span-8 bg-slate-800 border border-slate-700 p-6">

          <div className="flex justify-between items-center mb-6">

            <div>

              <h2 className="text-lg font-semibold">
                Camera Performance
              </h2>

              <p className="text-sm text-slate-400 mt-1">
                Performance across connected cameras
              </p>

            </div>

            <Camera
              size={22}
              className="text-blue-400"
            />

          </div>


          <div className="space-y-4">

            {cameras.map((camera) => (

              <div
                key={camera.name}
                className="flex items-center justify-between bg-slate-900/50 border border-slate-700 px-5 py-4"
              >

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">

                    <Camera
                      size={19}
                      className="text-blue-400"
                    />

                  </div>

                  <div>

                    <h3 className="text-sm font-semibold">
                      {camera.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {camera.location}
                    </p>

                  </div>

                </div>


                <div className="flex items-center gap-10">

                  <div>

                    <p className="text-xs text-slate-500">
                      People
                    </p>

                    <p className="text-sm font-semibold">
                      {camera.people}
                    </p>

                  </div>


                  <div>

                    <p className="text-xs text-slate-500">
                      FPS
                    </p>

                    <p className="text-sm font-semibold">
                      {camera.fps || "--"}
                    </p>

                  </div>


                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      camera.status === "Online"
                        ? "bg-green-500/15 text-green-400"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {camera.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;