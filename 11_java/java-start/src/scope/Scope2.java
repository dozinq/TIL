package scope;

public class Scope2 {
    public static void main(String[] args) {
        int m = 10;
        for (int i = 0; i < 2; i++) {
            System.out.println("for m = " + m);
            System.out.println("for i = " + i);
        }

//        System.out.println("main i = " + i);
        System.out.println("main m = " + m);
    }
}
