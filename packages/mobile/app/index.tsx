import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';
import { getAllQuizMetadata } from '@repo/core/features/quiz';
import { logger } from '@repo/core/utils/logger';

export default function HomeScreen() {
  const quizMetadata = getAllQuizMetadata();
  
  logger.log('Quiz metadata loaded:', quizMetadata.length);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Kuis Belajar Membaca</Text>
        <Text style={styles.subtitle}>Pilih jenis kuis yang ingin dimainkan!</Text>
        
        <View style={styles.quizList}>
          {quizMetadata.map((quiz) => (
            <Button
              key={quiz.id}
              mode="contained"
              onPress={() => {
                // TODO: Navigate to quiz screen
                logger.log('Quiz selected:', quiz.id);
              }}
              style={styles.quizButton}
            >
              {quiz.title}
            </Button>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
  quizList: {
    width: '100%',
    gap: 15,
  },
  quizButton: {
    marginVertical: 5,
  },
});

