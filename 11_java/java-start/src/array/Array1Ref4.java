package array;

public class Array1Ref4 {

    public static void main(String[] args) {
        int[] students = {90, 80, 70, 60, 50};

        for (int i = 0; i < students.length; i++) {
            System.out.println("학생" + (i + 1) + ", 점수: " + students[i]);
        }
    }
}
