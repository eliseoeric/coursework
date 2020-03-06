package com.eliseoeric.app;

public class BaseballCoach implements Coach {

    // define a private property for the dependency
    private FortuneService fortuneService;

    // define a constructor for dependency injection
    public BaseballCoach(FortuneService theFortuneService) {
        fortuneService = theFortuneService;
    }

    @Override
    public String getDailyWorkout() {
        return "Spend 30 min at batting practice";
    }

    @Override
    public String getDailyFortune() {
        // use myFortuneService to get a fortune.
        return fortuneService.getFortune();
    }

}