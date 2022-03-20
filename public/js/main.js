const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_realval= document.getElementById("temp_realval");
const datahide=document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal == "") {
        city_name.innerHTML = "Please write the name before search";
        datahide.classList.add("data_hide");
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0ce65fa73b4a6192411fda663ffeb9ed`;
            const response = await fetch(url);

            const data = await response.json();
            const arrdata = [data];


            temp_realval.innerText = arrdata[0].main.temp;
            city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;

            const tempmod = arrdata[0].weather[0].main;
            if (tempmod == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if (tempmod == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if (tempmod == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68+-;'></i>";
            }

            datahide.classList.remove("data_hide");


        } catch {
            city_name.innerHTML = "Please write the city name properly";
            datahide.classList.add("data_hide");
        }
    }
}
submitBtn.addEventListener("click", getInfo);