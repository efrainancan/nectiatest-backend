--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: auth; Type: TABLE; Schema: public; Owner: nectiano
--

CREATE TABLE public.auth (
    id integer NOT NULL,
    login character varying NOT NULL,
    password character varying,
    nombre character varying,
    estado boolean
);


ALTER TABLE public.auth OWNER TO nectiano;

--
-- Name: auth_id_seq; Type: SEQUENCE; Schema: public; Owner: nectiano
--

CREATE SEQUENCE public.auth_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_id_seq OWNER TO nectiano;

--
-- Name: auth_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nectiano
--

ALTER SEQUENCE public.auth_id_seq OWNED BY public.auth.id;


--
-- Name: tarea; Type: TABLE; Schema: public; Owner: nectiano
--

CREATE TABLE public.tarea (
    id integer NOT NULL,
    asunto character varying NOT NULL,
    prioridad character varying,
    comentario character varying,
    asignado character varying
);


ALTER TABLE public.tarea OWNER TO nectiano;

--
-- Name: tarea_id_seq; Type: SEQUENCE; Schema: public; Owner: nectiano
--

CREATE SEQUENCE public.tarea_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tarea_id_seq OWNER TO nectiano;

--
-- Name: tarea_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: nectiano
--

ALTER SEQUENCE public.tarea_id_seq OWNED BY public.tarea.id;


--
-- Name: auth id; Type: DEFAULT; Schema: public; Owner: nectiano
--

ALTER TABLE ONLY public.auth ALTER COLUMN id SET DEFAULT nextval('public.auth_id_seq'::regclass);


--
-- Name: tarea id; Type: DEFAULT; Schema: public; Owner: nectiano
--

ALTER TABLE ONLY public.tarea ALTER COLUMN id SET DEFAULT nextval('public.tarea_id_seq'::regclass);


--
-- Data for Name: auth; Type: TABLE DATA; Schema: public; Owner: nectiano
--

COPY public.auth (id, login, password, nombre, estado) FROM stdin;
7	admin	$2b$10$xShl8Ujuq9vkZCFpiGQcI.zad2iKK0c6SZaCXdE7j5ratbkB9JvNK	Administrador de sistemas	t
\.


--
-- Data for Name: tarea; Type: TABLE DATA; Schema: public; Owner: nectiano
--

COPY public.tarea (id, asunto, prioridad, comentario, asignado) FROM stdin;
24	Tarea 1	Alta		User1
25	Tarea 1	Alta		User1
26	Tarea 1	Alta		User1
27	Tarea 1	Alta		User1
28	Tarea 1	Alta		User1
29	Tarea 1	Alta		User1
30	Tarea 1	Alta		User1
31	Tarea 1	Alta		User1
32	Tarea 1	Alta		User1
33	Tarea 1	Alta		User1
34	Tarea 1	Alta		User1
35	Tarea 1	Alta		User1
\.


--
-- Name: auth_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nectiano
--

SELECT pg_catalog.setval('public.auth_id_seq', 7, true);


--
-- Name: tarea_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nectiano
--

SELECT pg_catalog.setval('public.tarea_id_seq', 35, true);


--
-- Name: auth auth_pkey; Type: CONSTRAINT; Schema: public; Owner: nectiano
--

ALTER TABLE ONLY public.auth
    ADD CONSTRAINT auth_pkey PRIMARY KEY (id);


--
-- Name: tarea tarea_pkey; Type: CONSTRAINT; Schema: public; Owner: nectiano
--

ALTER TABLE ONLY public.tarea
    ADD CONSTRAINT tarea_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

