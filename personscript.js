class person{
    constuctor(name,age,qualification){
        this.name=name;
        this.age=age;
        this.qualification=qualification;
    }
    retname(){
        return "The person name was"+this.name+"he is age"+this.age+"and he qualified"+this.qualification ;
    }
}
var a = new person("Akash",23,"B.E");
console.log(a.retname());