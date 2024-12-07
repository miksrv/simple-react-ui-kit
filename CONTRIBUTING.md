# Contributing to Simple React UI Kit

We appreciate your interest in contributing to our project! Below are guidelines on how to help us improve and develop this project further.

## How to Contribute

1. **Fork the repository**
   Click the "Fork" button at the top right of this repository and create your own fork of the project.

2. **Create a feature branch**
   Create a new branch for your feature or bugfix:

    ```bash
    git checkout -b feature/YourFeatureName
    ```

3. **Make your changes**
   Make your changes in the source files and ensure that everything works as expected. Please follow the code style and structure used in the project.

4. **Commit your changes**
   When your changes are ready, commit them with a clear and descriptive message:

    ```bash
    git commit -m "Add YourFeatureName"
    ```

5. **Push to your branch**
   Push your branch to GitHub:

    ```bash
    git push origin feature/YourFeatureName
    ```

6. **Submit a pull request (PR)**
   Open a pull request to the `main` branch. Ensure you include a description of your changes and why they're needed.

## Release Process (using changeset)

If your pull request is merged into the `main` branch and you're ready to release a new version of the project, follow the steps below.

1. After your pull request is merged, run the following command to create a new changeset:

    ```bash
    yarn changeset
    ```

    - Select the type of change (`major`, `minor`, or `patch`).
    - Provide a short description of the changes.

2. This will generate a Markdown file in the `.changeset` directory with the list of changes.

3. To finalize the release process, run the following command after the changeset is created:

    ```bash
    yarn changeversion
    ```

    This command will:

    - Update the `package.json` version number.
    - Generate the `CHANGELOG.md` file with the list of changes.

    **Important:** If you do not run `yarn changeversion`, the release will be delayed until this step is completed.

4. After this step, the next push to the `main` branch will trigger the release process.

## Pull Request Guidelines

- Ensure that your code follows the style and conventions used in the project.
- Add appropriate test coverage for any new features or changes.
- Make sure that the project builds and passes all tests before submitting your PR.
- Update documentation if necessary, especially if your changes introduce new features or modify existing functionality.

## Thank you!

Thank you for considering contributing to this project. Your contributions make the open-source community an amazing place to learn, inspire, and create.
