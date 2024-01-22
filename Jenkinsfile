pipeline {
    agent any

    environment {
        // Ustawienie wersji z Jenkins BUILD_NUMBER
        APP_VERSION = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Cleanup') {
            steps {
                // Usuwanie poprzednich kontenerów
                script {
                    sh 'docker ps -a -q --filter ancestor=portfolio_cv-app | xargs --no-run-if-empty docker stop'
                    sh 'docker ps -a -q --filter ancestor=portfolio_cv-app | xargs --no-run-if-empty docker rm'
                }

                // Usuwanie poprzednich obrazów
                script {
                    sh 'docker images -q portfolio_cv-app | xargs --no-run-if-empty docker rmi -f'
                }
            }
        }
        stage('Clone Repository') {
            steps {
                script {
                    // Klonowanie repozytorium GitHub
                    git url: 'https://github.com/piotrstepiennn/Portfolio-CV-app.git/'
                }
            }
        }
        stage('Build Image') {
            steps {
                script {
                    // Budowanie obrazu testowego z Dockerfile.test
                    docker.build('portfolio_cv-app', '-f Dockerfile .')
                }
            }
        }

        stage('Run Application Container') {
            steps {
                sh 'docker run -d -p 5173:5173 portfolio_cv-app'

            }
        }
    }
}
