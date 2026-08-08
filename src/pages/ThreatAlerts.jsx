import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle,
  Eye,
  Camera,
  MapPin,
  Clock,
} from "lucide-react";

function ThreatAlerts() {
  const alerts = [
    {
      type: "Suspicious Activity",
      camera: "Camera 01",
      location: "Main Entrance",
      time: "10:02 AM",
      score: "87%",
      severity: "High",
      status: "Active",
    },
    {
      type: "Threat Detected",
      camera: "Camera 02",
      location: "Parking Area",
      time: "09:48 AM",
      score: "72%",
      severity: "Medium",
      status: "Active",
    },
    {
      type: "Unusual Movement",
      camera: "Camera 01",
      location: "Main Entrance",
      time: "09:21 AM",
      score: "46%",
      severity: "Low",
      status: "Resolved",
    },
  ];

  return (
    <div className="p-8 text-white">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div className="flex items-center gap-3">

          <div className="p-3 bg-red-500/15 rounded-xl">

            <ShieldAlert
              size={28}
              className="text-red-400"
            />

          </div>

          <div>

            <h1 className="text-3xl font-bold">
              Threat Alerts
            </h1>

            <p className="text-slate-400 mt-1">
              Monitor and manage detected security threats
            </p>

          </div>

        </div>

        <div className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg">

          <span className="text-red-400 font-semibold">
            2 Active Alerts
          </span>

        </div>

      </div>


      {/* Summary Cards */}

      <div className="grid grid-cols-4 gap-5 mb-8">

        {/* Total Alerts */}

        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between">

            <div>

              <p className="text-slate-400 text-sm">
                Total Alerts
              </p>

              <h2 className="text-3xl font-bold mt-2">
                12
              </h2>

            </div>

            <AlertTriangle
              className="text-yellow-400"
              size={25}
            />

          </div>

        </div>


        {/* Active */}

        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between">

            <div>

              <p className="text-slate-400 text-sm">
                Active
              </p>

              <h2 className="text-3xl font-bold mt-2 text-red-400">
                02
              </h2>

            </div>

            <ShieldAlert
              className="text-red-400"
              size={25}
            />

          </div>

        </div>


        {/* Resolved */}

        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between">

            <div>

              <p className="text-slate-400 text-sm">
                Resolved
              </p>

              <h2 className="text-3xl font-bold mt-2 text-green-400">
                10
              </h2>

            </div>

            <CheckCircle
              className="text-green-400"
              size={25}
            />

          </div>

        </div>


        {/* Highest Score */}

        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between">

            <div>

              <p className="text-slate-400 text-sm">
                Highest Score
              </p>

              <h2 className="text-3xl font-bold mt-2 text-orange-400">
                87%
              </h2>

            </div>

            <ShieldAlert
              className="text-orange-400"
              size={25}
            />

          </div>

        </div>

      </div>


      {/* Alert List */}

      <div className="bg-slate-800 border border-slate-700">

        {/* List Header */}

        <div className="p-6 border-b border-slate-700">

          <h2 className="text-xl font-semibold">
            Recent Threat Alerts
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Latest detections from surveillance cameras
          </p>

        </div>


        {/* Alert Rows */}

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="p-6 border-b border-slate-700 hover:bg-slate-700/30 transition"
          >

            <div className="flex justify-between items-center">


              {/* LEFT SIDE */}

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-lg bg-red-500/15 flex items-center justify-center">

                  <ShieldAlert
                    size={22}
                    className="text-red-400"
                  />

                </div>


                <div>

                  <div className="flex items-center gap-3">

                    <h3 className="font-semibold">
                      {alert.type}
                    </h3>

                    <span className="text-xs px-2 py-1 rounded bg-red-500/15 text-red-400">

                      {alert.severity}

                    </span>

                  </div>


                  <div className="flex gap-5 mt-2 text-sm text-slate-400">

                    <span className="flex items-center gap-1">

                      <Camera size={14} />

                      {alert.camera}

                    </span>


                    <span className="flex items-center gap-1">

                      <MapPin size={14} />

                      {alert.location}

                    </span>


                    <span className="flex items-center gap-1">

                      <Clock size={14} />

                      {alert.time}

                    </span>

                  </div>

                </div>

              </div>


              {/* RIGHT SIDE */}

              <div className="flex items-center gap-8">


                {/* Threat Score */}

                <div className="text-center">

                  <p className="text-xs text-slate-400">
                    Threat Score
                  </p>

                  <p className="text-lg font-bold text-red-400">
                    {alert.score}
                  </p>

                </div>


                {/* Status */}

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    alert.status === "Active"
                      ? "bg-red-500/15 text-red-400"
                      : "bg-green-500/15 text-green-400"
                  }`}
                >

                  {alert.status}

                </span>


                {/* View Button */}

                <button className="w-9 h-9 rounded-lg bg-slate-700 hover:bg-blue-600 flex items-center justify-center">

                  <Eye size={17} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ThreatAlerts;