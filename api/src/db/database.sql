CRAETE DATABASE miDB;
CREATE SCHEMA public;

CREATE TABLE IF NOT EXISTS public.countries
(
    "ID_COUNTRY" integer NOT NULL,
    "COUNTRY_NAME" text COLLATE pg_catalog."default",
    CONSTRAINT countries_pkey PRIMARY KEY ("ID_COUNTRY")
);


CREATE TABLE IF NOT EXISTS public.states
(
    "ID_STATE" integer NOT NULL,
    "STATE_NAME" text COLLATE pg_catalog."default" NOT NULL,
    "ID_COUNTRY" integer NOT NULL,
    CONSTRAINT states_pkey PRIMARY KEY ("ID_STATE"),
    CONSTRAINT fk_country FOREIGN KEY ("ID_COUNTRY")
        REFERENCES public.countries ("ID_COUNTRY") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS public.cities
(
    "ID_CITY" integer NOT NULL,
    "CITY_NAME" text COLLATE pg_catalog."default",
    "ID_SATE" integer NOT NULL,
    "POPULATION" integer NOT NULL,
    CONSTRAINT cities_pkey PRIMARY KEY ("ID_CITY"),
    CONSTRAINT fk_states FOREIGN KEY ("ID_SATE")
        REFERENCES public.states ("ID_STATE") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

COPY public.countries(ID_COUNTRY, COUNTRY_NAME) FROM './countries.csv' DELIMITER ';' CSV;
COPY public.states(ID_SATE, STATE_NAME, ID_COUNTRY) FROM './states.csv' DELIMITER ';' CSV;
COPY public.cities(ID_CITY, CITY_NAME, ID_SATE, POPULATION) FROM './cities.csv' DELIMITER ';' CSV;