#include <iostream>
#include <iomanip>
using namespace std;

uint8_t readOneByte()
{
	uint8_t ch;
	std::cin >> ch;
	if (ch >= '0' && ch <= '9')
		ch = ch - 48;
	else if (ch >= 'A' && ch <= 'F')
		ch = ch - 55;
	else if (ch >= 'a' && ch <= 'f')
		ch = ch - 87;
	else if (ch == '.')
		ch = 255;

	return (int)ch;
}

int main()
{
	std::cin.sync_with_stdio(false);
	std::cout.sync_with_stdio(false);

	uint32_t i = 4294967295;
	uint32_t result = 0;

	while (true) {
		uint8_t input = readOneByte();
		if (input == 255) break;
		result ^= input << (--i % 5) * 4;
	}

	std::cout << std::hex << std::setw(5) << std::setfill('0') << result;
	return 0;
}