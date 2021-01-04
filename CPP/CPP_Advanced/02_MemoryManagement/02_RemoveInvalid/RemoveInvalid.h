#ifndef REMOVE_INVALID_H
#define REMOVE_INVALID_H

void removeInvalid(std::list<Company*>& companies) {
    std::list<Company*>::iterator it = companies.begin();
    while (it != companies.end()) {
        if ((*it)->getId() < 0) {
            delete (*it); // deallocating memory for every deleted company
            it = companies.erase(it);
        }
        else {
            it++;
        }
    }
}

#endif // !REMOVE_INVALID_H