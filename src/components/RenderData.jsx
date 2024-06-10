import React from "react";

function RenderData({userData}) {
  return (
    <div>
      {
        userData && (
          <div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center ">
            <p className="text-[40px]">{userData.name}</p>
            <div>
              <img
                className="w-10 ml-2"
                src={`https://flagcdn.com/144x108/${userData?.sys?.country.toLowerCase()}.png`}
                alt=""
              />
            </div>
          </div>
          <p className="text-[20px]">{userData?.weather?.[0]?.description}</p>
          <div>
            <img
              src={`https://openweathermap.org/img/w/${userData?.weather?.[0]?.icon}.png`}
              alt=""
            />
          </div>
          <p className="text-[2rem]">{userData.main.temp}°C</p>
        </div>
        <div className="flex mt-5 gap-5">
          <div className="w-[8rem] bg-gray-800 text-white bg-opacity-50   h-[8rem] rounded-md border border-black flex flex-col items-center justify-center">
            <img className="w-16 " src="src\assets\humidity.png" alt="" />
            <p>Humidity</p>
            <p>{userData.main.humidity}%</p>
          </div>
          <div className="w-[8rem]  bg-gray-800 text-white bg-opacity-50  h-[8rem] rounded-md border border-black flex flex-col items-center justify-center">
            <img className="w-16 " src="src\assets\wind.png" alt="" />
            <p>WINDSPEED</p>
            <p>{userData.wind.speed}m/s</p>
          </div>
          <div className="w-[8rem]  bg-gray-800 text-white bg-opacity-50 h-[8rem] rounded-md border border-black flex flex-col items-center justify-center">
            <img className="w-16 " src="src\assets\cloud.png" alt="" />
            <p>CLOUDS</p>
            <p>{userData.clouds.all}%</p>
          </div>
        </div>
      </div>
        )
      }
    </div>
  );
}

export default RenderData;
