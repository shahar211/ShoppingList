# Running the .NET Core App with Dockerized Database

To run the Shopping List .NET Core app, you need to deploy the database using Docker. Follow these steps:

1. Navigate to the `ShoppingListHomeAssignment` directory:

   ```bash
   cd ShoppingListHomeAssignment
2. Deploy the database using Docker:
   ```bash
   docker-compose up -d
Now, you can run the .NET Core app:

The app should connect to the Dockerized database, create the tables, and initialize the starting data


