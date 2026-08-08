import { useState } from "react";

import {
  Settings as SettingsIcon,
  SlidersHorizontal,
  Camera,
  ShieldCheck,
  Bell,
  Server,
  Save,
  RotateCcw,
  Video,
  Wifi,
  HardDrive,
  Cpu,
  Activity,
} from "lucide-react";

function Settings() {
  const [activeSection, setActiveSection] = useState("general");

  const [saved, setSaved] = useState(false);

  const menuItems = [
    {
      id: "general",
      label: "General",
      icon: SlidersHorizontal,
    },
    {
      id: "detection",
      label: "Detection",
      icon: ShieldCheck,
    },
    {
      id: "cameras",
      label: "Cameras",
      icon: Camera,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
    },
    {
      id: "system",
      label: "System",
      icon: Server,
    },
  ];

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="p-8 text-white">

      {/* HEADER */}

      <div className="mb-8">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">

            <SettingsIcon
              size={27}
              className="text-blue-400"
            />

          </div>

          <div>

            <h1 className="text-3xl font-bold">
              Settings
            </h1>

            <p className="text-slate-400 mt-1">
              Configure your surveillance system
            </p>

          </div>

        </div>

      </div>


      {/* MAIN SETTINGS LAYOUT */}

      <div className="grid grid-cols-12 gap-6">


        {/* LEFT MENU */}

        <div className="col-span-3 bg-slate-800 border border-slate-700 p-4 h-fit">

          <p className="text-xs uppercase tracking-wider text-slate-500 px-3 mb-3">
            Configuration
          </p>


          {menuItems.map((item) => {

            const Icon = item.icon;

            const active = activeSection === item.id;

            return (

              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition mb-2 ${
                  active
                    ? "bg-blue-600 text-white font-medium"
                    : "text-slate-300 hover:bg-slate-700"
                }`}
              >

                <Icon size={18} />

                {item.label}

              </button>

            );

          })}

        </div>


        {/* RIGHT CONTENT */}

        <div className="col-span-9">


          {/* ================= GENERAL ================= */}

          {activeSection === "general" && (

            <div className="bg-slate-800 border border-slate-700 p-6">

              <div className="mb-6">

                <h2 className="text-xl font-semibold">
                  General Settings
                </h2>

                <p className="text-sm text-slate-400 mt-1">
                  Basic configuration for the surveillance dashboard
                </p>

              </div>


              <div className="grid grid-cols-2 gap-6">


                <div>

                  <label className="text-sm text-slate-400">
                    System Name
                  </label>

                  <input
                    type="text"
                    defaultValue="AI Surveillance System"
                    className="w-full mt-2 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />

                </div>


                <div>

                  <label className="text-sm text-slate-400">
                    Operating Mode
                  </label>

                  <select
                    className="w-full mt-2 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500"
                  >

                    <option>
                      Live Monitoring
                    </option>

                    <option>
                      Testing Mode
                    </option>

                    <option>
                      Maintenance Mode
                    </option>

                  </select>

                </div>


                <div>

                  <label className="text-sm text-slate-400">
                    Processing FPS
                  </label>

                  <input
                    type="number"
                    defaultValue="30"
                    className="w-full mt-2 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />

                </div>


                <div>

                  <label className="text-sm text-slate-400">
                    Detection Threshold
                  </label>

                  <div className="flex items-center gap-4 mt-2">

                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="70"
                      className="flex-1 accent-blue-500"
                    />

                    <span className="text-sm font-semibold text-blue-400">
                      70%
                    </span>

                  </div>

                </div>

              </div>

            </div>

          )}


          {/* ================= DETECTION ================= */}

          {activeSection === "detection" && (

            <div className="bg-slate-800 border border-slate-700 p-6">

              <div className="flex items-center gap-3 mb-7">

                <div className="w-10 h-10 bg-red-500/15 rounded-lg flex items-center justify-center">

                  <ShieldCheck
                    size={20}
                    className="text-red-400"
                  />

                </div>

                <div>

                  <h2 className="text-xl font-semibold">
                    Threat Detection
                  </h2>

                  <p className="text-sm text-slate-400 mt-1">
                    Configure AI threat detection behavior
                  </p>

                </div>

              </div>


              <div className="space-y-6">


                <div className="flex justify-between items-center">

                  <div>

                    <p className="font-medium">
                      Real-time Detection
                    </p>

                    <p className="text-sm text-slate-500 mt-1">
                      Continuously analyze camera feeds
                    </p>

                  </div>

                  <div className="w-11 h-6 bg-blue-600 rounded-full relative">

                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5" />

                  </div>

                </div>


                <div className="border-t border-slate-700" />


                <div className="flex justify-between items-center">

                  <div>

                    <p className="font-medium">
                      Threat Alerts
                    </p>

                    <p className="text-sm text-slate-500 mt-1">
                      Generate alerts when threat score is exceeded
                    </p>

                  </div>

                  <div className="w-11 h-6 bg-blue-600 rounded-full relative">

                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5" />

                  </div>

                </div>


                <div className="border-t border-slate-700" />


                <div className="flex justify-between items-center">

                  <div>

                    <p className="font-medium">
                      Automatic Recording
                    </p>

                    <p className="text-sm text-slate-500 mt-1">
                      Record footage when a threat is detected
                    </p>

                  </div>

                  <div className="w-11 h-6 bg-slate-600 rounded-full relative">

                    <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5" />

                  </div>

                </div>


                <div className="border-t border-slate-700" />


                <div>

                  <div className="flex justify-between mb-2">

                    <p className="font-medium">
                      Threat Sensitivity
                    </p>

                    <span className="text-blue-400 text-sm">
                      70%
                    </span>

                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="70"
                    className="w-full accent-blue-500"
                  />

                </div>

              </div>

            </div>

          )}


          {/* ================= CAMERAS ================= */}

          {activeSection === "cameras" && (

            <div className="space-y-6">


              <div className="bg-slate-800 border border-slate-700 p-6">

                <div className="flex items-center justify-between mb-6">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 bg-blue-500/15 rounded-lg flex items-center justify-center">

                      <Camera
                        size={20}
                        className="text-blue-400"
                      />

                    </div>

                    <div>

                      <h2 className="text-xl font-semibold">
                        Camera Configuration
                      </h2>

                      <p className="text-sm text-slate-400 mt-1">
                        Configure connected surveillance cameras
                      </p>

                    </div>

                  </div>

                  <span className="text-green-400 text-sm">
                    1 Camera Online
                  </span>

                </div>


                <div className="space-y-4">


                  <div className="bg-slate-900/60 border border-slate-700 p-5">

                    <div className="flex justify-between items-center">

                      <div className="flex items-center gap-4">

                        <div className="w-10 h-10 bg-green-500/15 rounded-lg flex items-center justify-center">

                          <Video
                            size={19}
                            className="text-green-400"
                          />

                        </div>

                        <div>

                          <h3 className="font-semibold">
                            Camera 01
                          </h3>

                          <p className="text-sm text-slate-500">
                            Main Entrance
                          </p>

                        </div>

                      </div>


                      <span className="px-3 py-1 bg-green-500/15 text-green-400 rounded-full text-xs font-semibold">
                        Online
                      </span>

                    </div>


                    <div className="grid grid-cols-3 gap-4 mt-5">

                      <div>

                        <p className="text-xs text-slate-500">
                          Resolution
                        </p>

                        <p className="text-sm mt-1">
                          1920 × 1080
                        </p>

                      </div>

                      <div>

                        <p className="text-xs text-slate-500">
                          FPS
                        </p>

                        <p className="text-sm mt-1">
                          30 FPS
                        </p>

                      </div>

                      <div>

                        <p className="text-xs text-slate-500">
                          Connection
                        </p>

                        <p className="text-sm mt-1 text-green-400">
                          Stable
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="grid grid-cols-2 gap-5">

                    <div>

                      <label className="text-sm text-slate-400">
                        Default Resolution
                      </label>

                      <select className="w-full mt-2 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm">

                        <option>
                          1920 × 1080
                        </option>

                        <option>
                          1280 × 720
                        </option>

                        <option>
                          640 × 480
                        </option>

                      </select>

                    </div>


                    <div>

                      <label className="text-sm text-slate-400">
                        Default FPS
                      </label>

                      <select className="w-full mt-2 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm">

                        <option>30 FPS</option>
                        <option>25 FPS</option>
                        <option>20 FPS</option>
                        <option>15 FPS</option>

                      </select>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          )}


          {/* ================= NOTIFICATIONS ================= */}

          {activeSection === "notifications" && (

            <div className="bg-slate-800 border border-slate-700 p-6">

              <div className="flex items-center gap-3 mb-7">

                <div className="w-10 h-10 bg-yellow-500/15 rounded-lg flex items-center justify-center">

                  <Bell
                    size={20}
                    className="text-yellow-400"
                  />

                </div>

                <div>

                  <h2 className="text-xl font-semibold">
                    Notifications
                  </h2>

                  <p className="text-sm text-slate-400 mt-1">
                    Choose how security alerts are delivered
                  </p>

                </div>

              </div>


              <div className="space-y-5">


                <label className="flex items-center gap-3 cursor-pointer">

                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-blue-500 w-4 h-4"
                  />

                  <div>

                    <p className="text-sm font-medium">
                      Dashboard Notifications
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Show alerts directly on the dashboard
                    </p>

                  </div>

                </label>


                <div className="border-t border-slate-700" />


                <label className="flex items-center gap-3 cursor-pointer">

                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-blue-500 w-4 h-4"
                  />

                  <div>

                    <p className="text-sm font-medium">
                      High Threat Alerts
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Notify when threat score is high
                    </p>

                  </div>

                </label>


                <div className="border-t border-slate-700" />


                <label className="flex items-center gap-3 cursor-pointer">

                  <input
                    type="checkbox"
                    className="accent-blue-500 w-4 h-4"
                  />

                  <div>

                    <p className="text-sm font-medium">
                      System Performance Alerts
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Receive notifications about system performance
                    </p>

                  </div>

                </label>


                <div className="border-t border-slate-700" />


                <label className="flex items-center gap-3 cursor-pointer">

                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-blue-500 w-4 h-4"
                  />

                  <div>

                    <p className="text-sm font-medium">
                      Camera Offline Alerts
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Notify when a connected camera goes offline
                    </p>

                  </div>

                </label>

              </div>

            </div>

          )}


          {/* ================= SYSTEM ================= */}

          {activeSection === "system" && (

            <div className="space-y-6">


              <div className="bg-slate-800 border border-slate-700 p-6">

                <div className="flex items-center gap-3 mb-7">

                  <div className="w-10 h-10 bg-cyan-500/15 rounded-lg flex items-center justify-center">

                    <Server
                      size={20}
                      className="text-cyan-400"
                    />

                  </div>

                  <div>

                    <h2 className="text-xl font-semibold">
                      System Information
                    </h2>

                    <p className="text-sm text-slate-400 mt-1">
                      Current surveillance system status
                    </p>

                  </div>

                </div>


                <div className="grid grid-cols-2 gap-4">


                  <div className="bg-slate-900/60 border border-slate-700 p-5">

                    <div className="flex items-center gap-3">

                      <Cpu
                        size={20}
                        className="text-blue-400"
                      />

                      <div>

                        <p className="text-xs text-slate-500">
                          Processing Engine
                        </p>

                        <p className="text-sm font-semibold mt-1">
                          YOLO Detection
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="bg-slate-900/60 border border-slate-700 p-5">

                    <div className="flex items-center gap-3">

                      <Activity
                        size={20}
                        className="text-green-400"
                      />

                      <div>

                        <p className="text-xs text-slate-500">
                          System Status
                        </p>

                        <p className="text-sm font-semibold text-green-400 mt-1">
                          Running Normally
                        </p>

                      </div>

                    </div>

                  </div>


                  <div className="bg-slate-900/60 border border-slate-700 p-5">

                    <div>

                      <p className="text-xs text-slate-500">
                        Version
                      </p>

                      <p className="text-sm font-semibold mt-1">
                        1.0.0
                      </p>

                    </div>

                  </div>


                  <div className="bg-slate-900/60 border border-slate-700 p-5">

                    <div>

                      <p className="text-xs text-slate-500">
                        Connected Cameras
                      </p>

                      <p className="text-sm font-semibold mt-1">
                        1 / 1
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              <div className="bg-slate-800 border border-slate-700 p-6">

                <h2 className="text-lg font-semibold mb-5">
                  System Performance
                </h2>


                <div className="space-y-5">


                  <div>

                    <div className="flex justify-between mb-2">

                      <span className="text-sm text-slate-400">
                        CPU Usage
                      </span>

                      <span className="text-sm">
                        42%
                      </span>

                    </div>

                    <div className="h-2 bg-slate-700 rounded-full">

                      <div className="h-2 bg-blue-500 rounded-full w-[42%]" />

                    </div>

                  </div>


                  <div>

                    <div className="flex justify-between mb-2">

                      <span className="text-sm text-slate-400">
                        Memory Usage
                      </span>

                      <span className="text-sm">
                        58%
                      </span>

                    </div>

                    <div className="h-2 bg-slate-700 rounded-full">

                      <div className="h-2 bg-cyan-500 rounded-full w-[58%]" />

                    </div>

                  </div>


                  <div>

                    <div className="flex justify-between mb-2">

                      <span className="text-sm text-slate-400">
                        Storage
                      </span>

                      <span className="text-sm">
                        36%
                      </span>

                    </div>

                    <div className="h-2 bg-slate-700 rounded-full">

                      <div className="h-2 bg-green-500 rounded-full w-[36%]" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          )}


          {/* ACTION BUTTONS */}

          <div className="flex justify-end gap-3 mt-6">

            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-5 py-3 rounded-lg text-sm transition"
            >

              <RotateCcw size={16} />

              Reset

            </button>


            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-sm font-medium transition"
            >

              <Save size={16} />

              {saved ? "Saved!" : "Save Changes"}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;