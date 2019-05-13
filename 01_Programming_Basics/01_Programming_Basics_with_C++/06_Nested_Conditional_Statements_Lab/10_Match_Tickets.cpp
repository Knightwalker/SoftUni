#include <iostream>
#include <iomanip>
using namespace std;

int main() {
  double budget, budgetAfterTransportation, ticketCost, totalTicketsCost;
  string category;
  int people;

  cin >> budget >> category >> people;

  if (category == "Normal") {
    ticketCost = 249.99;
  } else if (category == "VIP") {
    ticketCost = 499.99;
  }

  totalTicketsCost = people * ticketCost;

  if (people > 0 && people <= 4) {
    budgetAfterTransportation = budget - (budget * 0.75);
  } else if (people > 4 && people <= 9) {
    budgetAfterTransportation = budget - (budget * 0.60);
  } else if (people > 9 && people <= 24) {
    budgetAfterTransportation = budget - (budget * 0.50);
  } else if (people > 24 && people <= 49) {
    budgetAfterTransportation = budget - (budget * 0.40);
  } else if (people > 49) {
    budgetAfterTransportation = budget - (budget * 0.25);
  }

  if (budgetAfterTransportation >= totalTicketsCost) {
    cout << fixed << setprecision(2) << "Yes! You have "<< budgetAfterTransportation - totalTicketsCost << " leva left." << endl;
  } else if (budgetAfterTransportation < totalTicketsCost) {
    cout << fixed << setprecision(2) << "Not enough money! You need "<< totalTicketsCost - budgetAfterTransportation << " leva." << endl;
  }

  return 0;	

}