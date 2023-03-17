import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Exam01 {
    void processMethod() throws IOException {
        BufferedReader in =
                new BufferedReader(
                        new InputStreamReader(
                                System.in));
        System.out.print("1번 숫자입력 : ");
        int num = Integer.parseInt(in.readLine());
        while (num / 10 != 0) {
            int temp = 0;
            while (num / 10 != 0) {
                temp += num % 10;
                num /= 10;
            }
            temp += num % 10;
            num = temp;
            System.out.println(num);
        }
    }
}
