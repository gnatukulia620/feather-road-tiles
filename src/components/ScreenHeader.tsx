import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constants/theme';

type Props = {
  title: string;
  kicker?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  tinted?: boolean;
  centered?: boolean;
};

/**
 * The ONE header every screen uses. Keeping badge / back-button / counter
 * styling in a single place is what stops them drifting apart between Menu,
 * Game and Result. paddingTop: 44 clears the status bar (rule #6).
 */
export default function ScreenHeader({
  title,
  kicker,
  leftSlot,
  rightSlot,
  tinted = false,
  centered = false,
}: Props) {
  return (
    <View style={[styles.header, tinted ? styles.tinted : null]}>
      <View style={styles.side}>{leftSlot}</View>
      <View style={[styles.titles, centered ? styles.center : null]}>
        {kicker ? <Text style={styles.kicker}>{kicker}</Text> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.side, styles.sideRight]}>{rightSlot}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 44,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tinted: {
    backgroundColor: 'rgba(120,80,44,0.10)',
    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.border,
  },
  side: { minWidth: 56, justifyContent: 'center', alignItems: 'flex-start' },
  sideRight: { alignItems: 'flex-end' },
  titles: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  center: { alignItems: 'center' },
  kicker: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 2.4,
    color: THEME.colors.textMuted,
    marginBottom: 2,
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '900',
    letterSpacing: 2,
    color: THEME.colors.text,
  },
});
