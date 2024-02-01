

var formNew = document.getElementById("mainFormNew");
var formLogin = document.getElementById("mainFormLogin");
var globalEmail;
var globalPass;

if (formNew) {
//parte da pagina de cadastro

  formNew.addEventListener("submit", function(e){

    e.preventDefault();
    var email = document.getElementById("emailForm");
    var pass = document.getElementById("passForm");

    globalEmail = email.value;
    globalPass = pass.value;


    if (globalEmail && globalPass) {
        var modalSuccsess = new bootstrap.Modal(document.getElementById("resultModalSuccsessNew"));
            modalSuccsess.show();
    } else {
        var modalError = new bootstrap.Modal(document.getElementById("resultModalErrorNew"));
            modalError.show();
    }
    console.log(globalEmail);
    console.log(globalPass);
    localStorage.setItem("getLogin", globalEmail);
    localStorage.setItem("getPassword", globalPass);
    
});

} else {
//parte da pagina de login
login_certo = localStorage.getItem("getLogin");
senha_certa = localStorage.getItem("getPassword");

console.log(login_certo);
console.log(senha_certa);

  formLogin.addEventListener("submit", function(e){
    //localização
  e.preventDefault();  
  
  var login = document.getElementById("emailFormLogin");
  var senha = document.getElementById("passFormLogin");
  //valor
  var getLogin = login.value;
  var getSenha = senha.value;
  
  //Localização H1
  var boasvindas = document.getElementById("welcome");
  
  if(getLogin && getSenha){
     if (login_certo === getLogin && senha_certa === getSenha){
        var modalSuccsess = new bootstrap.Modal(document.getElementById("resultModalSuccsess"));
        modalSuccsess.show();
     }
      else{
        var modalWrong = new bootstrap.Modal(document.getElementById("resultModalWrong"));
        modalWrong.show();
        }
        }
    else{
      var modalError = new bootstrap.Modal(document.getElementById("resultModalError"));
      modalError.show();
    }
});
}