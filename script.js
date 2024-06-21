let form=document.querySelector("form")
let temp=document.getElementById("tempid")
let finalConditions=document.getElementById("paraid")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData = async()=>{
        let key="05885ecff44d74d184d4ee2632fe78b6"
        let place=document.querySelector("#location").value
        let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        let finalOutput=await data.json()
        // console.log(finalOutput)
        // console.log(finalOutput.main.temp-273);
        temp.innerHTML=Math.round(finalOutput.main.temp-273)

        


    }
    fetchData()
})