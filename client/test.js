

class Parent{

     greet(){
        console.log("Hello from the parent");
    }
}

class Child extends Parent{


    greet(){
    super.greet();

    console.log("Hello from the child");
    }
} 

let obj=new Child;
obj.greet();

