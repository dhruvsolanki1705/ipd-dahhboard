import {
  FileText,
  Activity,
  ShieldAlert,
  Users,
  Camera,
  MapPin,
  Clock,
  Eye,
} from "lucide-react";

function EventLogs() {
  const events = [
    {
      id: "EVT-001",
      type: "Person Detected",
      camera: "Camera 01",
      location: "Main Entrance",
      time: "10:05:32 AM",
      score: "12%",
      status: "Normal",
    },
    {
      id: "EVT-002",
      type: "Threat Detected",
      camera: "Camera 01",
      location: "Main Entrance",
      time: "10:02:31 AM",
      score: "87%",
      status: "Alert",
    },
    {
      id: "EVT-003",
      type: "Person Detected",
      camera: "Camera 02",
      location: "Parking Area",
      time: "09:54:18 AM",
      score: "08%",
      status: "Normal",
    },
    {
      id: "EVT-004",
      type: "Unusual Movement",
      camera: "Camera 02",
      location: "Parking Area",
      time: "09:48:16 AM",
      score: "72%",
      status: "Alert",
    },
    {
      id: "EVT-005",
      type: "Person Detected",
      camera: "Camera 01",
      location: "Main Entrance",
      time: "09:41:05 AM",
      score: "15%",
      status: "Normal",
    },
  ];

  return (
    <div className="p-8 text-white">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div className="flex items-center gap-3">

          <div className="p-3 bg-blue-500/15 rounded-xl">

            <FileText
              size={28}
              className="text-blue-400"
            />

          </div>

          <div>

            <h1 className="text-3xl font-bold">
              Event Logs
            </h1>

            <p className="text-slate-400 mt-1">
              Complete history of surveillance system events
            </p>

          </div>

        </div>

        <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm transition">
          Export Logs
        </button>

      </div>


      {/* Summary Cards */}

      <div className="grid grid-cols-4 gap-5 mb-8">

        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-400 text-sm">
                Total Events
              </p>

              <h2 className="text-3xl font-bold mt-2">
                248
              </h2>

            </div>

            <Activity
              size={26}
              className="text-blue-400"
            />

          </div>

        </div>


        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-400 text-sm">
                People Detected
              </p>

              <h2 className="text-3xl font-bold mt-2">
                186
              </h2>

            </div>

            <Users
              size={26}
              className="text-cyan-400"
            />

          </div>

        </div>


        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-400 text-sm">
                Threat Events
              </p>

              <h2 className="text-3xl font-bold mt-2 text-red-400">
                12
              </h2>

            </div>

            <ShieldAlert
              size={26}
              className="text-red-400"
            />

          </div>

        </div>


        <div className="bg-slate-800 border border-slate-700 p-5">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-400 text-sm">
                Active Cameras
              </p>

              <h2 className="text-3xl font-bold mt-2 text-green-400">
                01
              </h2>

            </div>

            <Camera
              size={26}
              className="text-green-400"
            />

          </div>

        </div>

      </div>


      {/* Event Table */}

      <div className="bg-slate-800 border border-slate-700">

        {/* Table Header */}

        <div className="p-6 border-b border-slate-700">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-xl font-semibold">
                Recent Events
              </h2>

              <p className="text-sm text-slate-400 mt-1">
                Latest activity recorded by the surveillance system
              </p>

            </div>

            <div className="flex gap-2">

              <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm">
                All Events
              </button>

              <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm transition">
                Threats
              </button>

            </div>

          </div>

        </div>


        {/* Column Headings */}

        <div className="grid grid-cols-12 px-6 py-4 border-b border-slate-700 text-xs uppercase tracking-wide text-slate-500">

          <div className="col-span-2">
            Event
          </div>

          <div className="col-span-2">
            Camera
          </div>

          <div className="col-span-2">
            Location
          </div>

          <div className="col-span-2">
            Time
          </div>

          <div className="col-span-2 text-center">
            Threat Score
          </div>

          <div className="col-span-1 text-center">
            Status
          </div>

          <div className="col-span-1 text-right">
            View
          </div>

        </div>


        {/* Event Rows */}

        {events.map((event) => (

          <div
            key={event.id}
            className="grid grid-cols-12 items-center px-6 py-5 border-b border-slate-700 last:border-b-0 hover:bg-slate-700/30 transition"
          >

            {/* Event */}

            <div className="col-span-2 flex items-center gap-3">

              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  event.status === "Alert"
                    ? "bg-red-500/15"
                    : "bg-blue-500/15"
                }`}
              >

                {event.status === "Alert" ? (
                  <ShieldAlert
                    size={18}
                    className="text-red-400"
                  />
                ) : (
                  <Activity
                    size={18}
                    className="text-blue-400"
                  />
                )}

              </div>

              <div>

                <p className="font-medium text-sm">
                  {event.type}
                </p>

                <p className="text-xs text-slate-500">
                  {event.id}
                </p>

              </div>

            </div>


            {/* Camera */}

            <div className="col-span-2 flex items-center gap-2 text-sm text-slate-300">

              <Camera
                size={15}
                className="text-slate-500"
              />

              {event.camera}

            </div>


            {/* Location */}

            <div className="col-span-2 flex items-center gap-2 text-sm text-slate-300">

              <MapPin
                size={15}
                className="text-slate-500"
              />

              {event.location}

            </div>


            {/* Time */}

            <div className="col-span-2 flex items-center gap-2 text-sm text-slate-400">

              <Clock
                size={15}
                className="text-slate-500"
              />

              {event.time}

            </div>


            {/* Threat Score */}

            <div className="col-span-2 text-center">

              <span
                className={
                  event.status === "Alert"
                    ? "text-red-400 font-semibold"
                    : "text-green-400 font-semibold"
                }
              >
                {event.score}
              </span>

            </div>


            {/* Status */}

            <div className="col-span-1 flex justify-center">

              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  event.status === "Alert"
                    ? "bg-red-500/15 text-red-400"
                    : "bg-green-500/15 text-green-400"
                }`}
              >
                {event.status}
              </span>

            </div>


            {/* View */}

            <div className="col-span-1 flex justify-end">

              <button className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition">

                <Eye size={16} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default EventLogs;