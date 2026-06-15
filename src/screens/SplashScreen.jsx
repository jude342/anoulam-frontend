import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import GradientDesign from '../components/GradientDesign';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 4000)
    return () => clearTimeout(timer);

  }, [])
  return (
    <GradientDesign>
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('../assets/icon/AnoUlamLogo.png')} />
        <Text style={styles.title}>Ano ang luto ngayong araw?</Text>
      </View>
      <View>
        
      </View>
    </GradientDesign>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
    color: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
  }
});
