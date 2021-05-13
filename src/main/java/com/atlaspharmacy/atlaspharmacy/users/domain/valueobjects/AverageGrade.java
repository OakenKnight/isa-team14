package com.atlaspharmacy.atlaspharmacy.users.domain.valueobjects;

import javax.persistence.Embeddable;

@Embeddable
public class AverageGrade {
    private double excellent;
    private double veryGood;
    private double good;
    private double poor;
    private double veryPoor;


    public AverageGrade(){
        excellent = 0;
        veryGood = 0;
        good = 0;
        poor = 0;
        veryPoor = 0;
    }
    

    public AverageGrade(double excellent, double veryGood, double good, double poor, double veryPoor) {
        excellent = excellent;
        veryGood = veryGood;
        good = good;
        poor = poor;
        veryPoor = veryPoor;
    }

    public AverageGrade() {

    }

    public double count() {
        return ((5 * excellent) + (4 * veryGood) + (3 * good) + (2 * poor) + (1 * veryPoor))
                / (excellent + veryGood + good + poor + veryPoor);

    }

    public double getExcellent() { return excellent; }

    public void setExcellent(double excellent) { excellent = excellent; }

    public double getVeryGood() {
        return veryGood;
    }

    public void setVeryGood(double veryGood) {
        veryGood = veryGood;
    }

    public double getGood() {
        return good;
    }

    public void setGood(double good) {
        good = good;
    }

    public double getPoor() {
        return poor;
    }

    public void setPoor(double poor) {
        poor = poor;
    }

    public double getVeryPoor() {
        return veryPoor;
    }

    public void setVeryPoor(double veryPoor) {
        veryPoor = veryPoor;
    }
}
