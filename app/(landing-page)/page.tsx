"use client";

import { Hero } from "@/components/hero";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { setTimeout } from "timers";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/database.types";

type Inputs = {
  name: string;
  nameRequired: string;
  email: string;
  emailRequired: string;
  breweryName: string;
  breweryNameRequired: string;
  breweryLocation: string;
  breweryLocationRequired: string;
  breweryWebsite: string;
};

export default function IndexPage() {
  // Create a single supabase client for interacting with your database
  const supabase = createClient<Database>(
    "https://enotqitahgjposmgbfpj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVub3RxaXRhaGdqcG9zbWdiZnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3OTc0NTEsImV4cCI6MjA0NzM3MzQ1MX0.T8raEFyH8HuUpcaLt91Lep06kORaYdqLX4Ni143OV1o"
  );

  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitting(true);

    const { error } = await supabase.from("leads").insert({
      name: data.name,
      email: data.email,
      brewery_name: data.breweryName,
      brewery_location: data.breweryLocation,
      brewery_website: data.breweryWebsite,
    });

    if (!!error) {
      console.error(JSON.stringify(error, null, 2));
      setSubmitting(false);
    } else {
      router.push("/thankYou");
    }
  };

  return (
    <>
      <Hero
        title="Additional $100K In Annual Revenue...FREE?"
        subtitle="Fill out the form below to learn how you can get a full loyalty program for your brewery...for FREE!"
      />
      <div className="px-4 mx-auto max-w-screen-md mb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Name"
              required
              {...register("name")}
            />
            {errors.nameRequired && <span>Your name is required</span>}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Email"
              required
              {...register("email")}
            />
            {errors.emailRequired && <span>Your email is required</span>}
          </div>
          <div>
            <label
              htmlFor="breweryName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Brewery Name
            </label>
            <input
              type="text"
              id="breweryName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Brewery Name"
              required
              {...register("breweryName")}
            />
            {errors.breweryNameRequired && (
              <span>Your brewery name is required</span>
            )}
          </div>
          <div>
            <label
              htmlFor="breweryLocation"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Brewery Location
            </label>
            <input
              type="text"
              id="breweryLocation"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Brewery Location"
              required
              {...register("breweryLocation")}
            />
            {errors.breweryLocationRequired && (
              <span>Your brewery location is required</span>
            )}
          </div>
          <div>
            <label
              htmlFor="breweryWebsite"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Brewery Website
            </label>
            <input
              type="text"
              id="breweryWebsite"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Brewery Website"
              {...register("breweryWebsite")}
            />
          </div>
          <button
            disabled={submitting}
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
          >
            Let&apos;s Brew Loyalty!
          </button>
        </form>
      </div>
    </>
  );
}
