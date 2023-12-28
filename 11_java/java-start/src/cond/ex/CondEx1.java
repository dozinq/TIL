package cond.ex;

public class CondEx1 {

    public static void main(String[] args) {
        int score = 85;

        String grade;
        if (score >= 90) {
            grade = "A";
        } else if (score >= 85) {
            grade = "B";
        } else if (score >= 75) {
            grade = "C";
        } else if (score >= 65) {
            grade = "D";
        } else {
            grade = "F";
        }

        System.out.println("학점은 " + grade + "입니다.");
    }
}
