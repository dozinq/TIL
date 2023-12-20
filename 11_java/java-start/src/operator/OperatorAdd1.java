package operator;

public class OperatorAdd1 {

    public static void main(String[] args) {
        int a = 0;

        a = a + 1;
        System.out.println(a);

        a = a + 1;
        System.out.println(a);

        // 증감 연산자
        ++a; // a = a + 1
        System.out.println(a);
        ++a;
        System.out.println(a);
        a += 1;
        System.out.println(a);
    }
}
