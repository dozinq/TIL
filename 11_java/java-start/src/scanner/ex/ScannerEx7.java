package scanner.ex;

import java.util.Scanner;

public class ScannerEx7 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.print("이름을 입력하세요 (종료를 입력하면 종료) : ");
            String userName = scanner.nextLine();
            if (userName.equals("종료")) break;

            System.out.print("나이를 입력하세요: ");
            int userAge = scanner.nextInt();
            scanner.nextLine();

            System.out.println("입력한 이름: " + userName + ", 나이: " + userAge);

        }
    }
}
