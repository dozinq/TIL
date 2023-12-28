package cond.ex;

public class CondEx2 {

    public static void main(String[] args) {
        int distance = 10;

        String vehicle;
        if (distance <= 1) {
            vehicle = "도보";
        } else if (distance <= 10) {
            vehicle = "자전거";
        } else if (distance <= 100) {
            vehicle = "자동차";
        } else {
            vehicle = "비행기";
        }

        System.out.println(vehicle + "를 이용하세요.");
    }
}
