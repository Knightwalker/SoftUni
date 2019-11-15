#include <iostream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

const long sec = 299792;

class Planet {
private:
	string name = "";
	int distance = 0;
	int diameter = 0;
	int mass = 0;

public:
	Planet(string name, int distance, int diameter, int mass)
	{
		this->name = name;
		this->distance = distance;
		this->diameter = diameter;
		this->mass = mass;
	}

	void Print() {
		cout << this->name << " " << this->distance << " " << this->diameter << " " << this->mass << endl;
	}

	int GetLightTravelSpeed() {
		return this->distance / sec;
	}

	int GetDiameter() {
		return this->diameter;
	}

	int GetMass() {
		return this->mass;
	}

};

int main()
{

	vector<Planet> planetsVect;
	
	int n = 0; cin >> n;
	for (int i = 0; i < n; i++) {
		string name = ""; cin >> name;
		int distance = 0; cin >> distance;
		int diameter = 0; cin >> diameter;
		int mass = 0; cin >> mass;

		Planet planet(name, distance, diameter, mass);
		planetsVect.push_back(planet);
	}

	for (int i = 0; i < n; i++) {
		planetsVect[i].Print();
		cout << planetsVect[i].GetLightTravelSpeed() << endl;
	}

	int minMassOfAllPlanets = planetsVect[0].GetMass();
	int maxDiameterOfAllPlanets = planetsVect[0].GetDiameter();
	
	for (int i = 1; i < n; i++) {
		int currentMass = planetsVect[i].GetMass();
		int currentDiameter = planetsVect[i].GetDiameter();

		if (currentMass < minMassOfAllPlanets) {
			minMassOfAllPlanets = currentMass;
		}

		if (currentDiameter > maxDiameterOfAllPlanets) {
			maxDiameterOfAllPlanets = currentDiameter;
		}
	}

	cout << minMassOfAllPlanets << endl;
	cout << maxDiameterOfAllPlanets << endl;

}