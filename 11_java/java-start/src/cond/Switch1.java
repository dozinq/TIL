package cond;

public class Switch1 {

    public static void main(String[] args) {
        // grade 1: 1000, 2: 2000, 3: 3000, 나머지: 500;
        int grade = 2;

        int coupon;
        if (grade == 1) {
            coupon = 1000;
        } else if (grade == 2) {
            coupon = 2000;
        } else if (grade == 3) {
            coupon = 3000;
        } else {
            coupon = 500;
        }
        System.out.println("발금받은 쿠폰 " + coupon);
    }
}
