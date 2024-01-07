package scanner.ex;

import java.util.Scanner;

public class ScannerEx6 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("첫 번째 숫자를 입력하세요: ");
        int num1 = scanner.nextInt();

        System.out.print("두 번째 숫자를 입력하세요: ");
        int num2 = scanner.nextInt();

        int temp;
        if (num1 > num2) {
            temp = num1;
            num1 = num2;
            num2 = temp;
        }

        System.out.print("두 숫자 사이의 모든 정수: ");
        for (int i = num1; num2 >= i; i++) {
            System.out.print(i);
            if (i == num2) {
                break;
            } else {
                System.out.print(", ");
            }
        }
    }
}
