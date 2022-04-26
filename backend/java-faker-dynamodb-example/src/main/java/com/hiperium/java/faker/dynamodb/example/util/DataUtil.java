package com.hiperium.java.faker.dynamodb.example.util;

import com.github.javafaker.Faker;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

/**
 * @author Andres Solorzano
 */
public final class DataUtil {

    public static final Faker FAKER = new Faker();

    private DataUtil() {
        // Nothing to implement.
    }

    public static Instant getActualDateTime() {
        LocalDateTime localDateTime = LocalDateTime.now();
        return localDateTime.toInstant(ZoneOffset.UTC);
    }
}
