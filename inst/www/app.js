document.addEventListener("DOMContentLoaded", () => {

  ocpu.seturl()

  let btn = document.querySelector("button")


  btn.addEventListener("click", () => {

    let textInput = document.querySelector("input")

    let name = ocpu.rpc("greet", {
      name: textInput.value
    }, function(text){
      alert(text)
    })

  })

})
