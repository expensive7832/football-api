
const apiKey = '92670926182bdafa760c2d2c63923b15bf4f3554dc6605971acf09069a45490a';

var time = localStorage.getItem("time")


if(time === null){
  localStorage.setItem("time", "2022-10-04")
}


document.getElementById("date").onchange = function(){
    var datePick = document.getElementById("date").value;
    localStorage.setItem("time", datePick)
    window.location.reload(data)
    
}

fetch(`https://apiv3.apifootball.com/?action=get_countries&APIkey=${apiKey}`)
	.then(res => res.json())
	.then(response => {
        response.map((data) =>{

            const div = document.createElement('div') // <div></div>
            const img = document.createElement('img') // <img></img>
            const p = document.createElement('p') // <p></p>

            div.setAttribute("class", "d-flex mb-2 justify-content-between align-items-center")

            img.setAttribute("src", data?.country_logo);
            p.setAttribute("class","fw-bold");

            p.innerHTML = data?.country_name;

            div.append(img);
            div.append(p)

            
            

        document.getElementById('countrybody').append(div)
        })
    })
	.catch(err => console.log(err));

const data = fetch(`https://apiv3.apifootball.com/?action=get_predictions&from=${time}&to=2022-10-09&APIkey=${apiKey}`)
.then((res) => res.json())
.then((result) =>{
    result.map((data) =>{
        const div1 = document.createElement("div")
        div1.setAttribute("class", "predict")

        const div2 = document.createElement("div")
        div2.setAttribute("class", "d-flex justify-content-between align-items-center")
   
        const p1 = document.createElement("p")
        p1.innerHTML = data.country_name

        const small1 = document.createElement("small")
        small1.innerHTML = data.match_date

        const small2 = document.createElement("small")
        small2.innerHTML = data.league_name

        div2.append(p1)
        div2.append(small1)
        div2.append(small2)

        const div3 = document.createElement("div")
        div3.setAttribute("class", "d-flex justify-content-between align-items-center")

        const div4 = document.createElement("div")
        const p2 = document.createElement("p")
        p2.innerHTML =data.match_hometeam_name
        const small3 = document.createElement("small")
        small3.innerHTML = data.match_hometeam_score
       
        div4.append(p2)
        div4.append(small3)

        const div5 = document.createElement("div")
        div5.setAttribute("class","d-flex gap-2")
        const p3 = document.createElement("p")
        p3.innerHTML = data.prob_HW
        p3.setAttribute("class", "border bg-primary text-white")

        const p4 = document.createElement("p")
        p4.innerHTML = data.prob_D
        p4.setAttribute("class", "border bg-white text-dark")

        const p5 = document.createElement("p")
        p5.innerHTML = data.prob_AW
        p5.setAttribute("class", "border text-dark bg-warning")
        
        div5.append(p3)
        div5.append(p4)
        div5.append(p5)

        const div6 = document.createElement("div")
        const p6 = document.createElement("p")
        p6.innerHTML = data.match_awayteam_name
        const small4 = document.createElement("small")
        small4.innerHTML = data.match_awayteam_score
   
        div6.append(p6)
        div6.append(small4)

        div3.append(div4)
        div3.append(div5)
        div3.append(div6)

        const hr = document.createElement("hr")
        div1.append(div2)
        div1.append(div3)
        div1.append(hr)

    document.getElementById("predictBody").append(div1)
    })
})
.catch((err) => console.log(err))

