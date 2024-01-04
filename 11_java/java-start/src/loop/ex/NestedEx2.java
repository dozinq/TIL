package loop.ex;

public class NestedEx2 {

    public static void main(String[] args) {
        int row = 5;

        for (int i = 1; i <= row; i++) {
            String stars = "";
            for (int j = 1; j <= i; j++) {
                stars += "*";
            }
            System.out.println(stars);
        }
    }
}
