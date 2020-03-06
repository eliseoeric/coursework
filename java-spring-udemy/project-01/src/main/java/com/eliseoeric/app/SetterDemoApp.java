package com.eliseoeric.app;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SetterDemoApp {
    public static void main(String[] args) {
        // load spring config
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        // get bean from spring containere
        CricketCoach theCoach = context.getBean("myCricketCoach", CricketCoach.class);
        // call methods on bean
        System.out.println(theCoach.getDailyWorkout());
        System.out.println(theCoach.getDailyFortune());
        System.out.println(theCoach.getTeam());
        System.out.println(theCoach.getEmailAddress());
        // close the context
        context.close();
    }
}
