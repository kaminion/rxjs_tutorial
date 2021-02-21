function init(){
    // this가 존재하면 new 로 object 생성 가능
    var name = "Mozilla";
    // this.name = 'a';
    function displayName(){
        console.log(name);
    }
    displayName();
}
init();
// faliure
// init().displayName() 접근 금지