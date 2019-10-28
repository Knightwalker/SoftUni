#include <iostream>
#include <cmath>
#include <iomanip>

class EuclideanDistance {
	private:
	double x1 = 0;
	double y1 = 0;
	double x2 = 0;
	double y2 = 0;

	public:
	EuclideanDistance(double x1, double y1, double x2, double y2)
	{
		this->x1 = x1;
		this->y1 = y1;
		this->x2 = x2;
		this->y2 = y2;
	}

	double calcDistance() {
		double diffX = x2 - x1;
		double diffY = y2 - y1;

		double sqrtDiffX = pow(diffX, 2);
		double sqrtDiffY = pow(diffY, 2);

		double sum = sqrt(sqrtDiffX + sqrtDiffY);
		return sum;
	}

};

int main()
{
	int x1, y1, x2, y2;
	std::cin >> x1 >> y1 >> x2 >> y2;

	EuclideanDistance euclideanDistance(x1, y1, x2, y2);
	double result = euclideanDistance.calcDistance();
	std::cout << std::fixed << std::setprecision(3) << result;

}