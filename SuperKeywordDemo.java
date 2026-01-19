package Day5;

class Parent12 {
    void m1() {
        System.out.println("parent class method");
    }
}

class Child1 extends Parent12 {
    void m1() {
        System.out.println("child class method m1");
    }

    void m2() {
        this.m1();      // calls child m1()
        System.out.println("child class method m2");
        super.m1();     // calls parent m1()
    }
}

public class SuperKeywordDemo {
    public static void main(String[] args) {
        Child1 c = new Child1();
        c.m2();
    }
}
