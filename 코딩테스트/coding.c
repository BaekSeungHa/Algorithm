#include <stdio.h>

int main() {
	int c[100][100] = { 0, 1 }, a;
	scanf("%d", &a);
	for(int i=1; i<=a; i++) {
		for(int j=1; j<=i; j++) {
			c[i][j] = c[i-1][j-1] + c[i-1][j];
			printf("%d  ", c[i][j]);
		}
		printf("\n");
	}
}