

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
});

} else {
//parte da pagina de login

  formLogin.addEventListener("submit", function(e){
    //localização
  e.preventDefault();  

  console.log(globalEmail);
  console.log(globalPass);

  var login_certo = globalEmail;
  var senha_certa = globalPass;

  
  var login = document.getElementById("emailFormLogin");
  var senha = document.getElementById("passFormLogin");
  //valor
  var getLogin = login.value;
  var getSenha = senha.value;
  
  //Localização H1
  var boasvindas = document.getElementById("welcome");
  
  if (login_certo === getLogin && senha_certa === getSenha){
    //boasvindas.innerHTML = "<div class='text-bg-success'>Login efetuado com sucesso.</div>";
    alert("Logado");
  }
  
  else{
    //boasvindas.innerHTML = "<div class='text-bg-danger'>Senha incorreta.</div>";     
    alert("Login errado");
  }
  
 
});
}