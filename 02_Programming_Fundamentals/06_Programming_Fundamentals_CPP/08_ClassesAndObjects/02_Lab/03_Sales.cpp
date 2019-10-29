#include <iostream>
#include <vector>
#include <map>
#include <iomanip>
using namespace std;

class Sale {
private:
	string town = "";
	string product = "";
	double price = 0.0;
	double quantity = 0;

public:
	Sale(string town, string product, double price, double quantity)
	{
		this->town = town;
		this->product = product;
		this->price = price;
		this->quantity = quantity;
	}

	string getTown() {
		return this->town;
	}

	double getProfit() {
		return this->price * this->quantity;
	}

};

int main()
{
	int n = 0; cin >> n;
	vector<Sale> statisticsVect;
	map<string, double> statisticsMap;

	for (int i = 0; i < n; i++) {
		string town = ""; cin >> town;
		string product = ""; cin >> product;
		double price = 0.0; cin >> price;
		double quantity = 0; cin >> quantity;

		Sale sale(town, product, price, quantity);
		statisticsVect.push_back(sale);
	}

	for (int i = 0; i < statisticsVect.size(); i++) {
		string town = statisticsVect[i].getTown();		
		double profit = statisticsVect[i].getProfit();

		statisticsMap[town] += profit;
	}

	cout << fixed << setprecision(2);
	for (auto const& pair : statisticsMap) {
		std::cout << pair.first << " -> " << pair.second << std::endl;
	}

}