package com.eliseoeric.app;

public class HappyFortuneService implements FortuneService {
    @Override
    public String getFortune() {
        return "Toady is your lucky day.";
    }
}
