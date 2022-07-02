#include <stdio.h>

int main() {
	int student[11] = {0}, num, cnt=0, cnt3=0;
	while(1) {
		scanf("%d", &num);
		if(num==0) break;
		student[num/100]++;
		cnt++; //총 인원수
		if(num>=300) cnt3++;
	}
	for(int i=0; i<=9; i++) {
		if(student[i]!=0) printf("%d : %d개\n", i*100, student[i]);
	}
	if(cnt3 >= cnt/2.0) printf("목표 달성!");
}
